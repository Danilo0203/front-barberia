export interface ClienteEsperaProps {
  id: number;
  name: string;
  assigned_barber: null;
  in_queue: boolean;
  created_at: Date;
}
export interface ClienteAtendiendoProps {
  id: number;
  user: User;
  is_active: boolean;
  total_clients_attended: number;
  clients: Client[];
}

export interface Client {
  id: number;
  name: string;
  assigned_barber: number;
  in_queue: boolean;
  created_at: Date;
}

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  image: null;
}
