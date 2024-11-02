import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const localUser = localStorage.getItem('employeeApp')
  const router = inject(Router)
  if(localUser != null){
    return true;
  }else{
    router.navigate(['/login'])
    return false
  }
  
};