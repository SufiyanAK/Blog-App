import { Client, Account, ID } from "appwrite";
import { env } from "../envImports/envVariables";
// import { enqueueSnackbar } from 'notistack';

export class AuthServices {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(env.appwriteUrl)
            .setProject(env.projectId);

        this.account = new Account(this.client);
    }

    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (!userAccount) {
                // enqueueSnackbar('Account creation failed.', { variant: 'error' });
                return console.log('Account creation failed.');
            }

            // enqueueSnackbar('Account created successfully.', { variant: 'success' });
            console.log('Account created successfully.');
            return userAccount;
        } catch (error) {
            // enqueueSnackbar('Please provide all fields.', { variant: 'error' });
            console.error('Account creation error :: Please provide all fields.', error);
        }
    }

    async accountLogin({ email, password }) {
        try {
            const userLogin = await this.account.createEmailPasswordSession(email, password);

            if (!userLogin) {
                // enqueueSnackbar('Incorrect Email or Password.', { variant: 'error' });
                return console.log('Incorrect Email or Password.');
            }

            console.log('Account login successful.');
            // enqueueSnackbar('Account login successful.', { variant: 'success' });
            return userLogin;
        } catch (error) {
            // enqueueSnackbar('Please provide all fields.', { variant: 'error' });
            console.error('Login error :: Please provide all fields.', error);
        }
    }

    async getUser() {
        try {
            const user = await this.account.get();
            if (!user) {
                // enqueueSnackbar('User not found.', { variant: 'error' });
                console.log('User not found.');
                return null;
            }
            return user;
        } catch (error) {
            // enqueueSnackbar('User not found.', { variant: 'error' });
            console.error(`Get user error :: User not found ${error.message}`);
            return null;
        }
    }

    async userLogout() {
        try {
            await this.account.deleteSessions();
            // enqueueSnackbar('Logged out successfully.', { variant: 'success' });
            console.log('Logged out successfully.');
        } catch (error) {
            // enqueueSnackbar('Logout failed.', { variant: 'error' });
            console.error('Logout error :: Logout failed.', error);
        }
    }
}

const authServices = new AuthServices();

export default authServices;
