
export interface TInfluencer{
    accepted : number;
    active : boolean;
    agent_number:number;
    category_id:number;
    city:string;
    code:string;
    country:string;
    created_by:string;
    created_at:string;
    deleted_at:string;
    email:string;
    email_varified_at:string;
    featured:boolean;
    gender:string;
    id:number;
    indro:string;
    intro_ar:string;
    intro_en:string;
    mobile:string;
    mobile_varified_at:string;
    name:string;
    name_ar:string;
    name_en:string;
    national_id:string;
    nationality:string;
    nickname:string;
    password:string;
    promoted:boolean;
    ranking:number;
    remember_token:string;
    specialization:string;
    specialization_ar:string;
    specialization_en:string;
    stats:string;
    updated_at:string;

}

export interface TAdvertiser {
  id: number,
  name:string,
  email: string,
  email_verified_at: string,
  password: string,
  remember_token: string,
  identity_number: string,
  mobile: string,
  code: string,
  mobile_verified_at: string,
  employee_name: string,
  commercial_registration_no: string,
  type: string,
  registered_from: string,
  company_name: string,
  company_field: string,
  company_type: string,
  website: string,
  created_at: string,
  updated_at: string,
  deleted_at: string,
  device_token: string,
  active: number,
  partner: number,
  moalen_margin: number,
  registerd_from: string,
  user_id: string
}