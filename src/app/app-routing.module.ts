import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },*/
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'loan-details',
    loadChildren: () => import('./pages/loan-details/loan-details.module').then( m => m.LoanDetailsPageModule)
  },
  {
    path: 'edit-loans',
    loadChildren: () => import('./pages/edit-loans/edit-loans.module').then( m => m.EditLoansPageModule)
  },
  {
    path: 'new-loans',
    loadChildren: () => import('./pages/new-loans/new-loans.module').then( m => m.NewLoansPageModule)
  },
  {
    path: 'loan-requests',
    loadChildren: () => import('./pages/loan-requests/loan-requests.module').then( m => m.LoanRequestsPageModule)
  },
  {
    path: 'new-requests',
    loadChildren: () => import('./pages/new-requests/new-requests.module').then( m => m.NewRequestsPageModule)
  },
  {
    path: 'approved-requests',
    loadChildren: () => import('./pages/approved-requests/approved-requests.module').then( m => m.ApprovedRequestsPageModule)
  },
  {
    path: 'pending-requests',
    loadChildren: () => import('./pages/pending-requests/pending-requests.module').then( m => m.PendingRequestsPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment-confirm',
    loadChildren: () => import('./pages/payment-confirm/payment-confirm.module').then( m => m.PaymentConfirmPageModule)
  },
  {
    path: 'new-request-loan',
    loadChildren: () => import('./pages/new-request-loan/new-request-loan.module').then( m => m.NewRequestLoanPageModule)
  },
  {
    path: 'approved-request-loan',
    loadChildren: () => import('./pages/approved-request-loan/approved-request-loan.module').then( m => m.ApprovedRequestLoanPageModule)
  },
  {
    path: 'pending-request-loan',
    loadChildren: () => import('./pages/pending-request-loan/pending-request-loan.module').then( m => m.PendingRequestLoanPageModule)
  },
  {
    path: 'new-request-view',
    loadChildren: () => import('./pages/new-request-view/new-request-view.module').then( m => m.NewRequestViewPageModule)
  },
  {
    path: 'approved-request-view',
    loadChildren: () => import('./pages/approved-request-view/approved-request-view.module').then( m => m.ApprovedRequestViewPageModule)
  },
  {
    path: 'pending-request-view',
    loadChildren: () => import('./pages/pending-request-view/pending-request-view.module').then( m => m.PendingRequestViewPageModule)
  },
  {
    path: 'personal-details-view',
    loadChildren: () => import('./pages/personal-details-view/personal-details-view.module').then( m => m.PersonalDetailsViewPageModule)
  },
  {
    path: 'application-form-view',
    loadChildren: () => import('./pages/application-form-view/application-form-view.module').then( m => m.ApplicationFormViewPageModule)
  },
  {
    path: 'pending-reason',
    loadChildren: () => import('./pages/pending-reason/pending-reason.module').then( m => m.PendingReasonPageModule)
  },
  {
    path: 'obtained-loans',
    loadChildren: () => import('./pages/obtained-loans/obtained-loans.module').then( m => m.ObtainedLoansPageModule)
  },
  {
    path: 'obtained-loans-loan',
    loadChildren: () => import('./pages/obtained-loans-loan/obtained-loans-loan.module').then( m => m.ObtainedLoansLoanPageModule)
  },
  {
    path: 'obtained-loan-view',
    loadChildren: () => import('./pages/obtained-loan-view/obtained-loan-view.module').then( m => m.ObtainedLoanViewPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./pages/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'model-page',
    loadChildren: () => import('./pages/model-page/model-page.module').then( m => m.ModelPagePageModule)
  },
  {
    path: 'approveloan',
    loadChildren: () => import('./pages/approveloan/approveloan.module').then( m => m.ApproveloanPageModule)
  },
  {
    path: 'payment-details',
    loadChildren: () => import('./pages/payment-details/payment-details.module').then( m => m.PaymentDetailsPageModule)
  },  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
