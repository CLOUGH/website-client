import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AccordionModule,
  AlertModule,
  BsDropdownModule,
  ButtonsModule,
  CollapseModule,
  DatepickerModule,
  ModalModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    AlertModule,
    BsDropdownModule,
    ButtonsModule,
    CollapseModule,
    DatepickerModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule
  ],
  declarations: [],
  exports: [
    AccordionModule,
    AlertModule,
    BsDropdownModule,
    ButtonsModule,
    CollapseModule,
    DatepickerModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule
  ]
})
export class BootstrapModule { }
