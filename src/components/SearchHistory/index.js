import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
        searchItems: store.searchHistory.searchItems
    };
}

export default connect(mapStoreToProps)(SearchHistory);