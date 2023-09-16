import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceQuestionComponent } from './performance-question/performance-question.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"question", component:PerformanceQuestionComponent},
  {path:"evaluation", component:EvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
