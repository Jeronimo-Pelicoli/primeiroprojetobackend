import { getCustomRepository } from "typeorm";
import { ProfileRepository } from "../repository/ProfileRepository";

class ListProfileService {

    async execute() {

        const profileRepository = getCustomRepository(ProfileRepository);

        const profile = await profileRepository.find();

        return profile;
    }
}

export { ListProfileService }