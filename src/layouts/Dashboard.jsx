import React from 'react'
import AllJobAdvsList from '../pages/AllJobAdvsList'
import Navi from './Navi'
import SearchBox from './SearchBox'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Navi />

            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SearchBox />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <AllJobAdvsList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
