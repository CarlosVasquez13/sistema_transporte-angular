export interface LoginError {
  error: boolean;
  message: string;
}

export interface ResultRequest {
  Error: boolean;
  Success: boolean;
  Response: string;
  Item?: any;
  Items?: any;
}
