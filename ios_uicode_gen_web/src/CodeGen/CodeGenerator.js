
function validString (string) {
  return string && string.length
}
function convertColor (color) {
  return color.replace('#', '0x')
}

function genBasicCode (varName, basicOptions) {
  let code = ''
  if (validString(basicOptions.backgroundColor)) {
    code +=
      `
    ${varName}.backgroundColor = UIColorFromRGB(${convertColor(basicOptions.backgroundColor)});`
  }
  if (basicOptions.borderWidth > 0) {
    code +=
      `
    ${varName}.layer.borderWidth = RELATIVEVALUE(${basicOptions.borderWidth});`
  }
  if (validString(basicOptions.borderColor)) {
    code +=
      `
    ${varName}.layer.borderColor = UIColorFromRGB(${convertColor(basicOptions.borderColor)}).CGColor;`
  }
  if (basicOptions.borderRadius > 0) {
    code +=
      `
    ${varName}.layer.cornerRadius = RELATIVEVALUE(${basicOptions.borderRadius});`
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

function genButtonCode (viewClass, basicOptions, buttonOptions, constraintOptions) {
  // method body and init method
  let code =
    `- (void)createButton {
    UIButton* button = [UIButton buttonWithType:UIButtonTypeCustom];`
  // basic code
  code += genBasicCode('button', basicOptions)

  // unique code
  code += '\n'
  if (validString(buttonOptions.title)) {
    code +=
      `
    [button setTitle:@"${buttonOptions.title}" forState:UIControlStateNormal];`
  }
  if (validString(buttonOptions.titleColor)) {
    code +=
      `
    [button setTitleColor:UIColorFromRGB(${convertColor(buttonOptions.titleColor)}) forState:UIControlStateNormal];`
  }
  if (validString(buttonOptions.image)) {
    code +=
      `
    UIImage *image = [UIImage imageNamed:@"${buttonOptions.image}"];
    [button setImage:image forState:UIControlStateNormal];`
  }
  if (validString(buttonOptions.title) && validString(buttonOptions.image)) {
    code +=
      `
    //[button setImageEdgeInsets:UIEdgeInsetsMake(0, -7, 0, 0)];
    //[button setTitleEdgeInsets:UIEdgeInsetsMake(0, 0, 0, -7)];`
  }
  if (validString(buttonOptions.backgroundImage)) {
    code +=
      `
    UIImage *bgImage = [UIImage imageNamed:@"${buttonOptions.backgroundImage}"];
    [button setBackgroundImage:bgImage forState:UIControlStateNormal];`
  }

  // tail code
  code += '\n'

  const name = validString(basicOptions.name) ? basicOptions.name : viewClass.toLowerCase()
  const superName = validString(basicOptions.superName) ? basicOptions.superName : 'view'
  code += `
    [self.${superName} addSubview:button];
    _${name} = button;
}`

  // constraint code
  code += '\n'
  code += genConstraintCode('Button', name, superName, constraintOptions)

  return code
}

function genCustomViewCode (viewClass, basicOptions, constraintOptions) {
  // method body and init method
  let code =
    `- (void)createCustomView {
    UIView* view = [[UIView alloc] initWithFrame:CGRectZero];`
  // basic code
  code += genBasicCode('view', basicOptions)

  // tail code
  code += '\n'

  const name = validString(basicOptions.name) ? basicOptions.name : viewClass.toLowerCase()
  const superName = validString(basicOptions.superName) ? basicOptions.superName : 'view'
  code += `
    [self.${superName} addSubview:view];
    _${name} = view;
}`

  // constraint code
  code += '\n'
  code += genConstraintCode('CustomView', name, superName, constraintOptions)

  return code
}

export { genButtonCode, genCustomViewCode }
