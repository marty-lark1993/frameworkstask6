import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatService} from '../services/chat.service'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messageContent: string = '';
  messages: string[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // Subscribe to incoming messages
    this.chatService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    if (this.messageContent.trim()) {
      // Send the message to the server
      this.chatService.sendMessage(this.messageContent);
      this.messageContent = ''; // Clear the input after sending
    }
  }
}
