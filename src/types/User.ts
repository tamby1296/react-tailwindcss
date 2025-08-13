interface IAddressDto {
  street: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
}

export interface IUserDto {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: IAddressDto;
  date_of_birth: string;
  is_active: boolean;
  created_at: string;
}
