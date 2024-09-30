import BaseFilter from '../filters/baseFilter';
import FilterManager from '../filters/filterManager';

export default class FilterService {
	static createFilterManager() {
		const filterManager = new FilterManager();
		filterManager.addFilter(new BaseFilter());
		return filterManager;
	}
}
