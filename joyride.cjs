globalThis.WebSocket = require("ws");

function activate(context) {
  import("./out/js/joyride.js").then((joyride) => {
    joyride.activate(context);
  });
}

// deactivate = joyride.deactivate;

exports.activate = activate;
// exports.deactivate = deactivate;
