let userId: string | null = null;

export const setUserId = (id: string) => {
    userId = id;
};

export const getUserId = (): string | null => {
    return userId;
}