exports.getText = function(req, res){
  res.send('hello from server');
};

exports.getObject = function(req, res){
  res.json({ message: 'hello from server' });
};