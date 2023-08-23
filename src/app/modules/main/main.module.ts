import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WelcomeBadgeComponent } from './components/welcome-badge/welcome-badge.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

@NgModule({
  declarations: [WelcomeBadgeComponent, MainLayoutComponent],
  imports: [CommonModule, SharedModule],
  exports: [WelcomeBadgeComponent, MainLayoutComponent],
})
export class MainModule {}
