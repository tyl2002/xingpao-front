export type CurrentUser = {
    id: number;
    userName: string;
    userAccount: string;
    profile: string;
    avatarUrl: string;
    gender: number;
    phone: string;
    email: string;
    code: string;
    userStatus: number;
    tags: string[];
    createTime: Date;
    userRole: number;
};