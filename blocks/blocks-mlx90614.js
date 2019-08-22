Blockly.Blocks['mlx90614_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MLX90614 begin")
        .appendField(new Blockly.FieldDropdown([["I2C0","0"], ["I2C1","1"]]), "wire");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("start sensor MLX90614");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mlx90614_read_object_temp_c'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MLX90614 read object temperature (C)");
    this.setOutput(true, ["double", "Number"]);
    this.setColour(0);
 this.setTooltip("MLX90614 read object temperature (C)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mlx90614_read_object_temp_f'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MLX90614 read object temperature (F)");
    this.setOutput(true, ["double", "Number"]);
    this.setColour(0);
 this.setTooltip("MLX90614 read object temperature (F)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mlx90614_read_ambient_temp_c'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MLX90614 read ambient temperature (C)");
    this.setOutput(true, ["double", "Number"]);
    this.setColour(0);
 this.setTooltip("MLX90614 read object temperature (C)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mlx90614_read_ambient_temp_f'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MLX90614 read ambient temperature (F)");
    this.setOutput(true, ["double", "Number"]);
    this.setColour(0);
 this.setTooltip("MLX90614 read object temperature (F)");
 this.setHelpUrl("");
  }
};