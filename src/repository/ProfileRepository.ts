import { EntityRepository, Repository } from "typeorm";
import { Profile } from "../entity/Profile";


@EntityRepository(Profile)
class ProfileRepository extends Repository<Profile> {

}

export { ProfileRepository }