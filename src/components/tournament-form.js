import React from 'react';
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

const TournamentTextInput = () => <Input placeholder='the-big-house-9...' />
const TournamentSubmitButton = () => <Button>View Stations</Button>

function TournamentForm() {
  return (
    <form>
        <TournamentTextInput/>
        <TournamentSubmitButton/>
    </form>
  );
}

export default TournamentForm;
