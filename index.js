function process() {
  var testAMPStr = $('#testAMPStr').val();
  var rawStr = $('#rawStr').val()+testAMPStr + "</body>\n"  +
    "</html>";
  const validationResult = amp.validator.validateString(rawStr);
  $('#processedStr').val(JSON.stringify(validationResult));
}