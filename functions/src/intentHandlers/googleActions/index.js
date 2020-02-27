import templateHanders from './templates';
import authHandlers from './auth';

export default {
	...templateHanders,
	...authHandlers,
};
