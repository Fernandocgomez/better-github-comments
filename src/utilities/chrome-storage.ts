export class ChromeStorage {
    async setApiKey(apiKey: string): Promise<void> {
        return chrome.storage.local.set({ openAiApiKey: apiKey });
    }

    async getApiKey(): Promise<string> {
        const storageItems = await chrome.storage.local.get(['openAiApiKey']);
        
        return storageItems.openAiApiKey;
    }

    async apiKeyExist(): Promise<boolean> {
        const apiKey = await this.getApiKey();

        return !!apiKey
    }
}