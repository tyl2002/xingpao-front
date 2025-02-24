import myAxios from "../plugins/myAxios.ts";

export const genCurrentUser = async () => {
    return await myAxios.get('/user/current');
}