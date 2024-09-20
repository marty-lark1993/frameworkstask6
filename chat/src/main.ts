import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ChatComponent } from './app/chat/chat.component';

// Define the routes
const routes = [
  { path: '', component: ChatComponent }, // Default route to ChatComponent
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide the routes here
  ],
});