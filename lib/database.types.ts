export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			"form entries": {
				Row: {
					city: string;
					contact_by_email: boolean;
					contact_by_phone: boolean;
					contact_by_whatsApp: boolean;
					country: string;
					created_at: string;
					email: string;
					first_name: string;
					home_description: string;
					id: number;
					last_name: string;
					number_of_occupants: number;
					number_of_rooms: number;
					phone_code: string;
					phone_number: string;
					preferred_language: string;
					property_address: string;
					property_address_same_as_address: boolean;
					state: string;
					street_address: string;
					verified: boolean;
					zip: string;
				};
				Insert: {
					city: string;
					contact_by_email: boolean;
					contact_by_phone: boolean;
					contact_by_whatsApp: boolean;
					country: string;
					created_at?: string;
					email: string;
					first_name: string;
					home_description: string;
					id?: number;
					last_name: string;
					number_of_occupants: number;
					number_of_rooms: number;
					phone_code: string;
					phone_number: string;
					preferred_language: string;
					property_address: string;
					property_address_same_as_address: boolean;
					state: string;
					street_address: string;
					verified?: boolean;
					zip: string;
				};
				Update: {
					city?: string;
					contact_by_email?: boolean;
					contact_by_phone?: boolean;
					contact_by_whatsApp?: boolean;
					country?: string;
					created_at?: string;
					email?: string;
					first_name?: string;
					home_description?: string;
					id?: number;
					last_name?: string;
					number_of_occupants?: number;
					number_of_rooms?: number;
					phone_code?: string;
					phone_number?: string;
					preferred_language?: string;
					property_address?: string;
					property_address_same_as_address?: boolean;
					state?: string;
					street_address?: string;
					verified?: boolean;
					zip?: string;
				};
				Relationships: [];
			};
			hosts: {
				Row: {
					biography: string | null;
					country_of_residence: string | null;
					created_at: string;
					email: string | null;
					full_name: string | null;
					id: number;
					phone_number: string | null;
					profile_picture: string | null;
				};
				Insert: {
					biography?: string | null;
					country_of_residence?: string | null;
					created_at?: string;
					email?: string | null;
					full_name?: string | null;
					id?: number;
					phone_number?: string | null;
					profile_picture?: string | null;
				};
				Update: {
					biography?: string | null;
					country_of_residence?: string | null;
					created_at?: string;
					email?: string | null;
					full_name?: string | null;
					id?: number;
					phone_number?: string | null;
					profile_picture?: string | null;
				};
				Relationships: [];
			};
			profiles: {
				Row: {
					avatar_url: string | null;
					full_name: string | null;
					id: string;
					updated_at: string | null;
					username: string | null;
					website: string | null;
				};
				Insert: {
					avatar_url?: string | null;
					full_name?: string | null;
					id: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Update: {
					avatar_url?: string | null;
					full_name?: string | null;
					id?: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_id_fkey";
						columns: ["id"];
						isOneToOne: true;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
