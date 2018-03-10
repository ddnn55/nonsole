/*
nonsole.js 
Like console but on screen
*/

var nonsoleEl = document.createElement('div');
nonsoleEl.style.position = 'fixed';
nonsoleEl.style.bottom = '0px';
nonsoleEl.style.height = '100px';
nonsoleEl.style.overflow = 'scroll';
nonsoleEl.style.fontSize = '10px';
nonsoleEl.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
nonsoleEl.style.color = 'white';
nonsoleEl.style.fontFamily = 'monospace';
nonsoleEl.style.right = 0;
nonsoleEl.style.left = 0;

var attached = false;

function getArguments(args) {
  var _arguments = [];
  for(var a = 0; a < args.length; a++) {
    _arguments.push(args[a]);
  }
  return _arguments;
}

var _interface = {
    log: function() {
        if(!attached) {
          attached = true;
            document.querySelector('body').appendChild(nonsoleEl);
        }
        var _arguments = getArguments(arguments);
        function formatLogItem(a) {
          try {
            return JSON.stringify(a, null, 2);
          }
          catch(e) {
            return a.toString();
          }
        }
        nonsoleEl.innerHTML = '<div>'+_arguments.map(formatLogItem).join(', ')+'</div>' + nonsoleEl.innerHTML;
        nonsoleEl.style.display = 'block';
    },
    info: function() {
      var newArguments = ['ℹ️'].concat(getArguments(arguments));
      _interface.log.apply(_interface, newArguments);
    },
    warn: function() {
      var newArguments = ['⚠️'].concat(getArguments(arguments));
      _interface.log.apply(_interface, newArguments);
    },
    error: function() {
      var newArguments = ['⛔️'].concat(getArguments(arguments));
      _interface.log.apply(_interface, newArguments);
    },
    clear: function() {
      nonsoleEl.innerHTML = "";
    },
    hide: function() {
      nonsoleEl.style.display = 'none';
    }

};

module.exports = _interface;
