import{io as o}from"socket.io-client";var i=(o=>(o.SERVER_CONNECTION="connection",o.CLIENT_CONNECTION="connect",o.DISCONNECTION="disconnect",o.UPLOAD_IMAGE="upload-image",o.UPLOAD_IMAGE_FAILURE="upload-image-failure",o.SERVER_SEND_IMAGE="server-send-image",o.PLUGIN_REGISTER="plugin-register",o.PLUGIN_REGISTER_SUCCESS="plugin-register-success",o.PLUGIN_REGISTER_FAILURE="plugin-register-failure",o.CLIENT_GET_ROOMS="client-get-plugins",o.CLIENT_OUT_ROOM="client-out-room",o))(i||{});class e{io;constructor(i){const{url:e,socketFrom:t}=i;this.io=o(`${e}?socketFrom=${t}`,{withCredentials:!0}),this.initSocket(i)}initSocket(o){const{socketFrom:e}=o;switch(e){case"device":this.initDeviceSocket(o);break;case"plugin":this.initPluginSocket(o)}this.io.on(i.CLIENT_CONNECTION,(()=>{console.log(`${this.io.id} connected!`)})),this.io.on(i.DISCONNECTION,(()=>{console.log(`${this.io.id} disconnected`)}))}initDeviceSocket(o){const{getRoomsFn:e}=o;this.io.on(i.CLIENT_GET_ROOMS,(o=>{e&&e(o)}))}initPluginSocket(o){o.roomName&&(this.io.on(i.PLUGIN_REGISTER_SUCCESS,(i=>{console.log(`${this.io.id} create room success`),o.joinedRoomFn&&o.joinedRoomFn(i)})),this.io.on(i.SERVER_SEND_IMAGE,(i=>{console.log(`${this.io.id} got image`),o.getRoomImgFn&&o.getRoomImgFn(i)})))}uploadImage(o){this.io.emit(i.UPLOAD_IMAGE,o)}createRoom(o){this.io.emit(i.PLUGIN_REGISTER,o)}}export{e as SocketClient};
