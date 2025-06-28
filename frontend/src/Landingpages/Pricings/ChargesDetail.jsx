function ChargeDetail(){
    return (
 <div className="container my-5">
      <h3>Charges for account setup</h3>
      <table className="table table-striped text-start table-hover">
        <thead>
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simulation account</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>Learning modules</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>Advanced features</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>Strategy builder</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-5">Premium features (coming soon)</h3>
      <table className="table table-striped  text-start table-hover">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Advanced Analytics</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 299/2999</td>
          </tr>
          <tr>
            <td>Custom Strategies</td>
            <td>Per strategy</td>
            <td>Basic: Free | Advanced: 199</td>
          </tr>
          <tr>
            <td>API Access</td>
            <td>Monthly</td>
            <td>Basic: Free | Pro: 499</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}
export default ChargeDetail;