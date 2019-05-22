import React from 'react';
import { Query } from 'react-apollo';

import { ICutList } from '../../models/ICutList.Model';
import { ICutListVariables } from '../../models/ICutListVariables.Model';
import cutListQuery from './Cut-List.Query';

// const variables: ICutListVariables = {
//     width: 1,
//     depth: 2,
//     thickness: 3,
//     blockDepth: 4,
//     blockWidth: 5
// }

const CutListComponent = (props: any) => (
    <Query<ICutList, ICutListVariables>
        query={cutListQuery}
        variables={props.variables}>
        {
            ({ loading, error, data }) => {
                console.log(props.variables);

                if (loading || !data) return <h1>Loading...</h1>
                if (error) return <h1>Something went wrong... {error.message}</h1>

                return <div>
                    <h2>Board Feed: {data.cutList.boardFeet}</h2>
                    <h3>Board Thickness: {data.cutList.boardSize}</h3>
                    <ul>
                        {
                            data!.cutList.cuts.map((cut, index) => (
                                <li key={index}>
                                    {cut}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        }

    </Query>
);

export default CutListComponent