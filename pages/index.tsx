import { useWeb3 } from '@3rdweb/hooks';
import type { NextPage } from 'next';
import Button from '../components/button';

const Welcome: NextPage = () => {
  const { address, connectWallet, disconnectWallet } = useWeb3();

  return (
    <div className="flex flex-col items-center pt-10">
      {address && <Button cb={disconnectWallet}>Disconnect (address {address})</Button>}
      {!address && <Button cb={() => connectWallet('injected')}>Connect</Button>}
    </div>
  );
};

export default Welcome;
