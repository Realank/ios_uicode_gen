
function validString (string) {
  return string && string.length
}
function convertColor (color) {
  return color.replace('#', '0x')
}

function genBasicCode (indent, varName, basicOptions) {
  let code = ''
  if (validString(basicOptions.backgroundColor)) {
    code +=
      `
    ${indent}${varName}.backgroundColor = UIColorFromRGB(${convertColor(basicOptions.backgroundColor)});`
  }
  if (basicOptions.borderWidth > 0) {
    code +=
      `
    ${indent}${varName}.layer.borderWidth = RELATIVEVALUE(${basicOptions.borderWidth});`
  }
  if (validString(basicOptions.borderColor)) {
    code +=
      `
    ${indent}${varName}.layer.borderColor = UIColorFromRGB(${convertColor(basicOptions.borderColor)}).CGColor;`
  }
  if (basicOptions.borderRadius > 0) {
    code +=
      `
    ${indent}${varName}.layer.cornerRadius = RELATIVEVALUE(${basicOptions.borderRadius});`
  }
  return code
}

function genConstraintCode (type, varName, superName, constraintOptions) {
  let code =
    `- (void)update${type}Constraints {
    __weak __typeof(self) weakSelf = self;
    [self.${varName} mas_remakeConstraints:^(MASConstraintMaker *make) {`

  // self constraints
  if (constraintOptions.checkSelfWidth) {
    code +=
      `
        make.width.mas_equalTo(RELATIVEVALUE(${constraintOptions.selfWidth}));`
  }
  if (constraintOptions.checkSelfHeight) {
    code +=
      `
        make.height.mas_equalTo(RELATIVEVALUE(${constraintOptions.selfHeight}));`
  }
  // super constraints
  function genPositionConstraints (side, offset) {
    let code = `
        make.${side}.equalTo(weakSelf.${superName}.mas_${side})`
    if (offset) {
      code += `.offset(RELATIVEVALUE(${offset}))`
    }
    code += ';'
    return code
  }
  code += '\n'
  if (constraintOptions.checkSuperTop) {
    code += genPositionConstraints('top', constraintOptions.superTopOffset)
  }
  if (constraintOptions.checkSuperBottom) {
    code += genPositionConstraints('bottom', constraintOptions.superBottomOffset)
  }
  if (constraintOptions.checkSuperLeft) {
    code += genPositionConstraints('left', constraintOptions.superLeftOffset)
  }
  if (constraintOptions.checkSuperRight) {
    code += genPositionConstraints('right', constraintOptions.superRightOffset)
  }
  if (constraintOptions.checkSuperCenterX) {
    code += genPositionConstraints('centerX', constraintOptions.superCenterXOffset)
  }
  if (constraintOptions.checkSuperCenterY) {
    code += genPositionConstraints('centerY', constraintOptions.superCenterYOffset)
  }

  code +=
    `
    }];
}`
  return code
}

function genCreateMethodHeader (widgetType, viewClass, name, activeLoad) {
  let code = `@property (nonatomic, strong) ${viewClass} *${name};\n\n`
  if (activeLoad) {
    code += `- (void)create${widgetType} {`
  } else {
    code += `- (${viewClass} *)${name}() {
    if (!_${name}) {`
  }
  return code
}

function genCreateMethodTail (superName, localVarName, propertyName, activeLoad) {
  let code = '\n'
  if (activeLoad) {
    code += `
    [self.${superName} addSubview:${localVarName}];
    _${propertyName} = ${localVarName};
}`
  } else {
    code += `
        _${propertyName} = ${localVarName};
    }
    return _${propertyName};
}`
  }
  return code
}

function genCustomViewCode (viewClass, basicOptions, constraintOptions, activeLoad) {
  // method body and init method
  const localVarName = 'view'
  const widgetType = 'CustomView'
  const propertyName = validString(basicOptions.name) ? basicOptions.name : viewClass.toLowerCase()
  const superName = validString(basicOptions.superName) ? basicOptions.superName : 'view'
  let indent = activeLoad ? '' : '    '
  let code = genCreateMethodHeader(widgetType, viewClass, propertyName, activeLoad)

  code += `
    ${indent}UIView* ${localVarName} = [[UIView alloc] initWithFrame:CGRectZero];`

  // basic code
  code += genBasicCode(indent, localVarName, basicOptions)

  // tail code
  code += genCreateMethodTail(superName, localVarName, propertyName, activeLoad)

  // constraint code
  code += '\n\n'
  code += genConstraintCode(widgetType, propertyName, superName, constraintOptions)

  return code
}

function genButtonCode (viewClass, basicOptions, buttonOptions, constraintOptions, activeLoad) {
  // method body and init method
  const localVarName = 'button'
  const widgetType = 'Button'
  const propertyName = validString(basicOptions.name) ? basicOptions.name : viewClass.toLowerCase()
  const superName = validString(basicOptions.superName) ? basicOptions.superName : 'view'
  let indent = activeLoad ? '' : '    '
  let code = genCreateMethodHeader(widgetType, viewClass, propertyName, activeLoad)

  code += `
    ${indent}UIButton* ${localVarName} = [UIButton buttonWithType:UIButtonTypeCustom];`

  // basic code
  code += genBasicCode(indent, localVarName, basicOptions)

  // unique code
  code += '\n'
  if (validString(buttonOptions.title)) {
    code +=
      `
    ${indent}[${localVarName} setTitle:@"${buttonOptions.title}" forState:UIControlStateNormal];`
  }
  if (validString(buttonOptions.titleColor)) {
    code +=
      `
    ${indent}[${localVarName} setTitleColor:UIColorFromRGB(${convertColor(buttonOptions.titleColor)}) forState:UIControlStateNormal];`
  }
  if (validString(buttonOptions.image)) {
    code +=
      `
    ${indent}UIImage *image = [UIImage imageNamed:@"${buttonOptions.image}"];
    ${indent}[${localVarName} setImage:image forState:UIControlStateNormal];`
  }
  if (validString(buttonOptions.title) && validString(buttonOptions.image)) {
    code +=
      `
    ${indent}//[${localVarName} setImageEdgeInsets:UIEdgeInsetsMake(0, -7, 0, 0)];
    ${indent}//[${localVarName} setTitleEdgeInsets:UIEdgeInsetsMake(0, 0, 0, -7)];`
  }
  if (validString(buttonOptions.backgroundImage)) {
    code +=
      `
    ${indent}UIImage *bgImage = [UIImage imageNamed:@"${buttonOptions.backgroundImage}"];
    ${indent}[${localVarName} setBackgroundImage:bgImage forState:UIControlStateNormal];`
  }

  // tail code
  code += genCreateMethodTail(superName, localVarName, propertyName, activeLoad)

  // constraint code
  code += '\n\n'
  code += genConstraintCode(widgetType, propertyName, superName, constraintOptions)

  return code
}

function genImageViewCode (viewClass, basicOptions, imageViewOptions, constraintOptions, activeLoad) {
  // method body and init method
  const localVarName = 'imageView'
  const widgetType = 'ImageView'
  const propertyName = validString(basicOptions.name) ? basicOptions.name : viewClass.toLowerCase()
  const superName = validString(basicOptions.superName) ? basicOptions.superName : 'view'
  let indent = activeLoad ? '' : '    '
  let code = genCreateMethodHeader(widgetType, viewClass, propertyName, activeLoad)
  code += `
    ${indent}UIImageView* ${localVarName} = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"${imageViewOptions.image}"]];`
  // basic code
  code += genBasicCode(indent, localVarName, basicOptions)
  // unique code
  if (imageViewOptions.hightLightedImage) {
    code +=
      `
    ${indent}${localVarName}.highlightedImage = [UIImage imageNamed:@"${imageViewOptions.hightLightedImage}"];`
  }
  // tail code
  code += genCreateMethodTail(superName, localVarName, propertyName, activeLoad)

  // constraint code
  code += '\n\n'
  code += genConstraintCode(widgetType, propertyName, superName, constraintOptions)

  return code
}

export { genButtonCode, genCustomViewCode, genImageViewCode }
