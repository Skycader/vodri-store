import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { WelcomeBadgeComponent } from './components/welcome-badge/welcome-badge.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

@NgModule({
  declarations: [WelcomeBadgeComponent, MainLayoutComponent, SideNavComponent],
  imports: [CommonModule, SharedModule],
  exports: [WelcomeBadgeComponent, MainLayoutComponent, SideNavComponent],
})
export class MainModule {}
