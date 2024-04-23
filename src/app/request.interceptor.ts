import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.method === 'POST'){
    const newRequest = req.clone({headers: new HttpHeaders({token: '12345ghj'})});
    return next(newRequest);
  }
  return next(req);
};
