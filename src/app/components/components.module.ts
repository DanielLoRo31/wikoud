import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionSectionComponent } from './description-section/description-section.component';
import { AreaSectionComponent } from './area-section/area-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { TechnologiesSectionComponent } from './technologies-section/technologies-section.component';
import { SuscriptionSectionComponent } from './suscription-section/suscription-section.component';
import { ButtonComponent } from './button/button.component';
import { AreaItemComponent } from './area-item/area-item.component';
import { TeamItemComponent } from './team-item/team-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCustomComponent } from './input-custom/input-custom.component';

@NgModule({
  declarations: [
    DescriptionSectionComponent,
    AreaSectionComponent,
    TeamSectionComponent,
    TechnologiesSectionComponent,
    SuscriptionSectionComponent,
    ButtonComponent,
    AreaItemComponent,
    TeamItemComponent,
    InputCustomComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    DescriptionSectionComponent,
    AreaSectionComponent,
    TeamSectionComponent,
    TechnologiesSectionComponent,
    SuscriptionSectionComponent,
  ],
})
export class ComponentsModule {}
