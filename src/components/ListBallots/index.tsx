const ListBallots: React.VFC = () => {
  return (
    <div className="bg-white">
      <h1 className="px-5 py-4 text-xl font-medium">ALL BALLOTS</h1>
      <div>
        <table className="table-auto">
          <thead>
            <tr className="text-center border-t">
              <th className="py-4 px-3 w-1/4 font-semibold text-subtext text-lg min-w-[400px]">
                Ballot Name
              </th>
              <th className="py-4 px-3 w-1/4 font-semibold text-subtext text-lg min-w-[100px]">
                Accredited Voters
              </th>
              <th className="py-4 px-3 w-1/4 font-semibold text-subtext text-lg min-w-[100px]">
                Date Created
              </th>
              <th className="py-4 px-3 w-1/4 font-semibold text-subtext text-lg min-w-[100px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="font-medium text-base text-tableText text-center py-5 px-2">
                APAVILLA Presidential Election
              </td>
              <td className="font-medium text-base text-tableText text-center py-5 px-2">
                935
              </td>
              <td className="font-medium text-base text-tableText text-center py-5 px-2">
                1961
              </td>
              <td className="font-medium text-base text-tableText text-center py-5 px-2"></td>
            </tr>
            <tr className="border-t">
              <td className="font-medium text-base text-tableText text-center py-5 px-2">
                The Next GEN
              </td>
              <td className="font-medium text-base text-tableText text-center py-5 px-2">
                120
              </td>
              <td className="font-medium text-base text-tableText text-center py-5 px-2">
                1972
              </td>
              <td className="font-medium text-base text-tableText text-center py-5 px-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBallots;
