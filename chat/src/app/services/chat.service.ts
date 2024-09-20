import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;

  constructor() {
    // Connect to the server
    this.socket = io('http://localhost:3000');
  }

  // Method to send a message to the server
  sendMessage(message: string): void {
    this.socket.emit('chat message', message);
  }

  // Method to receive messages from the server
  getMessages(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('chat message', (message: string) => {
        observer.next(message);
      });
    });
  }
}