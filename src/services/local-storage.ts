import lscache from 'lscache';

type StoreOptions = {
	ttl?: number;
}

export function read(key: string): any {
	return lscache.get(key);
}

// ttl in minutes
export function store(key: string, data: any, options?: StoreOptions): void {
	lscache.set(key, data, options?.ttl);
}
