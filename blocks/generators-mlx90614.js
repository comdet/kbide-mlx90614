Blockly.JavaScript['mlx90614_begin'] = function(block) {
  var dropdown_wire = block.getFieldValue('wire');
  var code = `
#EXTINC
#include <Adafruit_MLX90614.h>
#END
#EXTINC
#include <Wire.h>
#END
#VARIABLE
Adafruit_MLX90614 mlx90614 = Adafruit_MLX90614();
#END
mlx90614.begin(${dropdown_wire});
`;
  return code;
};

Blockly.JavaScript['mlx90614_read_object_temp_c'] = function(block) {
  var code = `mlx90614.readObjectTempC()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mlx90614_read_object_temp_f'] = function(block) {
  var code = `mlx90614.readObjectTempF()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mlx90614_read_ambient_temp_c'] = function(block) {
  var code = `mlx90614.readAmbientTempC()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mlx90614_read_ambient_temp_f'] = function(block) {
  var code = `mlx90614.readAmbientTempF()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};