import { useState } from 'react';
import RealmPicker from './components/RealmPicker';
import AgeGate from './components/AgeGate';
import InterestPicker from './components/InterestPicker';
import ColonyView from './components/ColonyView';

export default function App() {
  const [stage, setStage] = useState('realm');
  const [realm, setRealm] = useState('heaven');
  const [verified, setVerified] = useState(false);
  const [interests, setInterests] = useState([]);

  const handleRealmSelect = (selectedRealm) => {
    if (selectedRealm === 'both') {
      setRealm('heaven');
    } else {
      setRealm(selectedRealm);
    }
    setStage('age');
  };

  const handleAgeVerify = (isVerified) => {
    if (isVerified) {
      setVerified(true);
      setStage('interests');
    }
  };

  const handleInterestsComplete = (selectedInterests) => {
    setInterests(selectedInterests);
    setStage('colony');
  };

  return (
    <>
      {stage === 'realm' && (
        <RealmPicker onSelect={handleRealmSelect} />
      )}

      {stage === 'age' && (
        <AgeGate onVerify={handleAgeVerify} theme={realm} />
      )}

      {stage === 'interests' && (
        <InterestPicker onComplete={handleInterestsComplete} theme={realm} />
      )}

      {stage === 'colony' && (
        <ColonyView theme={realm} onBack={() => setStage('interests')} />
      )}
    </>
  );
}
