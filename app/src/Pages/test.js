import React, {Component} from 'react';


const TestAdd = (props) => {
    return (
        <div>
            <h1>Test add</h1>

            <button onClick={props.addToList} style={{
                width: 25,
                height: 25,
                backgroundColor: 'blue',
                borderRadius: '50%'
            }}>+</button>

        </div>
    );
};

const TestList = (props) => {
    const onInputChange = (event, elemIndex) => {
        props.onInputChange(event, elemIndex);
    };

    return (
        <div>
            <h1>List</h1>

            {
                props.educationInfoList &&
                props.educationInfoList.map((education, index) => {
                    return (
                        <div style={{
                            padding: 20,
                            border: '2px solid blue'
                        }}>
                            <form>
                                <input name="institution" value={props.educationInfoList[index].institution} onChange={(event) => onInputChange(event, index)}/>
                                <br />
                                <input name="description" value={education.description} onChange={(event) => onInputChange(event, index)}/>
                                <br />
                                <input name="startDate" value={education.startDate} onChange={(event) => onInputChange(event, index)}/>
                                <br />
                                <input name="endDate" value={education.endDate} onChange={(event) => onInputChange(event, index)}/>
                                <br />
                            </form>
                        </div>
                    );
                })
            }
        </div>
    );
};


class Test extends Component {
    state = {
      name: '',
      description: '',
      educationInfoList: [],
    };

    onAdd = () => {
        this.setState((prevState) => ({
            ...prevState,
            educationInfoList: prevState.educationInfoList.concat({

            }),
        }))
    };

    onChange = (event, index) => {
        const newValue = event.target.value;
        const propertyToChange = event.target.name;
        const educationInfoList = [...this.state.educationInfoList];

        const elementToChange = educationInfoList[index];

        elementToChange[propertyToChange] = newValue;

        this.setState({ educationInfoList });
    };

    render() {
        return (
            <div>
                <pre>{ JSON.stringify(this.state, null, 2) }</pre>
                <TestAdd
                    addToList={this.onAdd}
                />

                <TestList
                    educationInfoList={this.state.educationInfoList}
                    onInputChange={this.onChange}
                />
            </div>
        );
    }
}

export default Test;