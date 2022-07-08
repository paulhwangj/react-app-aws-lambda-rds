import React from 'react';
import axios from 'axios';

export default class GetData extends React.Component {
    state = {
      datas: []
    }
  
    componentDidMount() {
      axios.get(`https://pcygjgd98i.execute-api.us-east-2.amazonaws.com/example-api-stage`)
        .then(res => {
          const datas = res.data;
          this.setState({ datas });
        })
    };
  
    render() {
        return  (
            <>
              <h1>Task #5 - Paul's React App</h1>
              <ul>
                {
                  this.state.datas
                    .map(data =>
                      <li key={data.id}>id: {data.id} first_name: {data.first_name}</li>
                    )
                }
              </ul>
            </>
          );
    }
}