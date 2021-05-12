import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async list() {
        const users = await this.usersRepository.find()
        if(!users) {
            return console.error("Erro na consulta");
        }

        return users
    }

    async show(id: number) {
        const users = await this.usersRepository.findOne({id});
        if(!users) {
            return console.error("Erro na consulta");
        }

        return users
    }

    async create(id: number, title: string, description: string) {

        const users = this.usersRepository.create({
            id,
            title,
            description
        });

        await this.usersRepository.save(users);

        return users;
    }

    async update(id: number, title: string, description: string) {
        const users = this.usersRepository.createQueryBuilder()
            .update(User)
            .set({ title, description})
            .where("id = :id", {
                id
            }).execute();
    }

    async delete(id: number) {
        const users = this.usersRepository.createQueryBuilder()
        .delete()
        .where("id = :id", {
            id
        }).execute();
    }

}

export { UsersService }