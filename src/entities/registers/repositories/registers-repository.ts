export interface RegistersRepository {
	create: (registerData: CreateRegisterDTO) => Promise<Register>;
}
