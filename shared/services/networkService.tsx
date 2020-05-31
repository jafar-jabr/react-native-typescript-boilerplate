import NetInfo from '@react-native-community/netinfo';

class NetworkService {
  constructor({ onInternetConnection, onNoInternetConnection }) {
    this.onNoInternetConnection = onNoInternetConnection;
    this.onInternetConnection = onInternetConnection;
  }

  #networkTogglingLogic = ({ isInternetReachable, isConnected }) =>
    isInternetReachable !== false || isConnected !== false;

  startObserving = () => {
    this.unsubscribe = NetInfo.addEventListener(({ isInternetReachable, isConnected }) => {
      const hasInternetConnection = this.#networkTogglingLogic({
        isInternetReachable,
        isConnected,
      });

      if (hasInternetConnection) {
        this.onInternetConnection();
      } else {
        this.onNoInternetConnection();
      }
    });
  };

  stopObserving = () => this.unsubscribe && this.unsubscribe();

  checkStatus = async () => {
    const { isInternetReachable, isConnected } = await NetInfo.fetch();
    return this.#networkTogglingLogic({ isInternetReachable, isConnected });
  };
}

export default NetworkService;
