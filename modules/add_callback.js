module.exports = function(babel) {
  //define variables
  var t = babel.types;

  return {
    visitor: {
      FunctionDeclaration: function(path) {
        path.node.params.push(t.identifier('_callback'));
        path.node.body.body.push(
          t.ifStatement(
            t.identifier('_callback'),
            t.expressionStatement(
              t.callExpression(
                t.identifier('_callback'),
                []
              )
            )
          )
        );
      },
    },
  };
};
