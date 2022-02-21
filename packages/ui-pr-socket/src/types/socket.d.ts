import { SOCKET_EVENT } from "../shared/events"

export type SocketThrowMsg = {
  msg: string
}

export interface SocketFileOptions {
  buffer: Buffer,
  fileFormat: string
}

export interface SServerToClientEvents {
  [SOCKET_EVENT.UPLOAD_IMAGE]: (options: SocketFileOptions) => void
  [SOCKET_EVENT.PLUGIN_REGISTER]: (options: { id: string, room: string }) => void
}

export interface SClientToServerEvents {
  [SOCKET_EVENT.CLIENT_GET_ROOMS]: (rooms: string[]) => void
  [SOCKET_EVENT.PLUGIN_REGISTER_SUCCESS]: (roomName: string) => void
  [SOCKET_EVENT.PLUGIN_REGISTER_FAILURE]: (params: SocketThrowMsg) => void
  [SOCKET_EVENT.UPLOAD_IMAGE_FAILURE]: (params: SocketThrowMsg) => void
}
export interface SocketData {}

export interface SInterServerEvents {}

export interface CServerToClientEvents {
  [SOCKET_EVENT.CLIENT_CONNECTION]: () => void
  [SOCKET_EVENT.DISCONNECTION]: () => void
  [SOCKET_EVENT.CLIENT_GET_ROOMS]: (rooms: string[]) => void
  [SOCKET_EVENT.PLUGIN_REGISTER_SUCCESS]: (roomName: string) => void
  [SOCKET_EVENT.SERVER_SEND_IMAGE]: (options: SocketFileOptions) => void
}
export interface CClientToServerEvents {
  [SOCKET_EVENT.PLUGIN_REGISTER]: (options: { id: string, room: string }) => void
  [SOCKET_EVENT.UPLOAD_IMAGE]: (options: SocketFileOptions) => void
}

export type SocketId = string

export type SocketFrom = 'device' | 'plugin'

export type SocketFirstReqQuery = {
  socketFrom: SocketFrom,
}

type SocketClientBaseOptions = {
  id: string,
  url: string
  getRoomsFn?: (rooms: string[]) => void
  getRoomImgFn?: (options: SocketFileOptions) => void
  joinedRoomFn?: (roomName: string) => void
  clientConnectedFn?: () => void
  clientDisconnectedFn?: () => void
}
type SocketClientExtractOptions = {
  socketFrom: Extract<SocketFrom, 'plugin'>
  roomName: string
} | {
  socketFrom: Extract<SocketFrom, 'device'>
  roomName?: string
}
export type SocketClientOptions = SocketClientBaseOptions & SocketClientExtractOptions