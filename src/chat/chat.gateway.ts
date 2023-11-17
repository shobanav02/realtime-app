import { SubscribeMessage, WebSocketGateway, WebSocketServer ,MessageBody, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server , Socket} from 'socket.io';

@WebSocketGateway()
export class ChatGateway {

  @WebSocketServer()
  server:Server


  handleConnection(client: Socket) {
    // Handle connection event
    console.log('connected');

  }

  handleDisconnect(client: Socket) {
    // Handle disconnection event
    console.log('disconnected');

  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    // Handle received message
    console.log(data)
    return data.toString();
    //client.broadcast.emit('message', data); // Broadcast the message to all connected clients
  }
}
