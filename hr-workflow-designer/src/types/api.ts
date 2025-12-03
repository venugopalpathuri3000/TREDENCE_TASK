export interface AutomationAction {
  id: string;
  label: string;
  params: string[];
}

export interface SimulateRequest {
  workflow: any; // Replace 'any' with the appropriate type for the workflow structure
}

export interface SimulateResponse {
  log: string[];
  success: boolean;
  errors?: string[];
}