import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Add RouterOutlet here, remove Register
  template: `
    <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class App { }
